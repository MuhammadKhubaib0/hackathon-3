import { defineType } from "sanity"

export const product = defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      validation: (rule) => rule.required(),
      type: "string"
    },
    {
      name: "description",
      type: "text",
      validation: (rule) => rule.required(),
      title: "Description"
    },
    {
      name: "productImage",
      type: "image",
      validation: (rule) => rule.required(),
      title: "Product Image"
    },
    {
      name: "price",
      type: "number",
      validation: (rule) => rule.required(),
      title: "Price"
    },
    {
      name: "tags",
      type: "array",
      title: "Tags",
      of: [{ type: "string" }]
    },
    {
      name: "discountPercentage",
      type: "number",
      title: "Discount Percentage"
    },
    {
      name: "inventory",
      type: "number",
      title: "Inventory"
    },
    {
      name: "isNew",
      type: "boolean",
      title: "New Badge"
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",  // Automatically generate the slug from the title
        maxLength: 96,    // Limit the length of the generated slug
      },
      validation: (rule) => rule.required()
    }
  ]
});
