import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'a3z9tsf5', // Replace with your actual project ID
  dataset: 'production', // Replace with your dataset name if different
  useCdn: false, // Set to false for development/import scripts
  apiVersion: '2023-07-01', // Use a recent API version
  token: 'skhsYs3rulA0keu1QxkMHZPRkXvLp8WKV7QaGSLxX24PJzZ6vNLIUfdPbbmuUOEkaY0NobTydscG33B7c8PW2frEQXSAm3dBeCw3yhyKIOrlImkbquQ9WMzwxRFR2tpFVT199Dm8TG4QY2SNfzJ5WLKtppyLz8IalTLLnJA8K6VXq7N73PES', // Replace with your actual token
});

async function uploadImageToSanity(imageUrl) {
  try {
    if (!imageUrl) {
      console.warn("No image URL provided. Skipping image upload.");
      return null;
    }

    console.log(`Uploading image: ${imageUrl}`);

    const response = await fetch(imageUrl);
    if (!response.ok) {
      const errorText = await response.text(); // Get error details from the API
      throw new Error(`Failed to fetch image: ${imageUrl}. Status: ${response.status}, Details: ${errorText}`);
    }

    const buffer = await response.arrayBuffer();
    const bufferImage = Buffer.from(buffer);

    const asset = await client.assets.upload('image', bufferImage, {
      filename: imageUrl.split('/').pop(), // Extract filename
    });

    console.log(`Image uploaded successfully: ${asset._id}`);
    return asset._id;

  } catch (error) {
    console.error('Failed to upload image:', imageUrl, error);
    return null;
  }
}

async function uploadProduct(product) {
  try {
    const imageId = await uploadImageToSanity(product.imageUrl);

    const productDocument = {
      _type: 'product',
      title: product.title,
      description: product.description,  // Make sure this field exists in Sanity
      price: product.price,
      tags: product.tags || [], // Handle cases where tags might be undefined
      discountPercentage: product.discountPercentage || 0, // Corrected typo here
      isNew: product.isNew || false, // Provide default values for booleans
      // productImage: imageId ? {  // Conditionally add image reference
      //   _type: 'reference',
      //   _ref: imageId,
      // } : undefined,
      productImage: imageId ? {
        _type: 'image',
        asset: {
          _type: 'reference',
          _ref: imageId,
        },
      } : undefined,
    };

    const createdProduct = await client.create(productDocument);
    console.log(`Product ${product.title} uploaded successfully:`, createdProduct);

  } catch (error) {
    console.error('Error uploading product:', product.title, error); // Include product title in error
  }
}



async function importProducts() {
  try {
    const response = await fetch('https://template6-six.vercel.app/api/products');

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`HTTP error! Status: ${response.status}, Details: ${errorText}`);
    }

    const products = await response.json();
    console.log("Fetched products:", products);

    if (!products || !Array.isArray(products)) {
      throw new Error("Invalid data format received from the API. Expected an array of products.");
    }


    for (const product of products) {
      console.log("Processing product:", product.title);
      await uploadProduct(product);
    }

    console.log("Import process complete.");

  } catch (error) {
    console.error('Error importing products:', error);
  }
}

importProducts();