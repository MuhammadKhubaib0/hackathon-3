// eslint-disable-next-line import/no-anonymous-default-export
export default {
    name: "order",
    type: "document",
    title: "Order",
    fields: [
        {
            name: "firstName",
            title: "First Name",
            type: "string"
        },
        {
            name: "lastName",
            title: "Last Name",
            type: "string"
        },
        {
            name: "address",
            title: "Address",
            type: "string"
        },
        {
            name: "city",
            title: "City",
            type: "string"
        },
        {
            name: "zipCode",
            title: "Zip Code",
            type: "string" // Zip codes can contain letters (in some countries), so string is preferable
        },
        {
            name: "phone",
            title: "Phone",
            type: "string" // Phone numbers should be stored as strings to retain leading zeros and formatting
        },
        {
            name: "email",
            title: "Email",
            type: "string"
        },
        {
            name: "cartItems",
            title: "Cart Items",
            type: "array",
            of: [{ type: "reference", to: { type: "product" } }],
        },
        {
            name: "total",
            title: "Total",
            type: "number"
        },
        {
            name: "discount",
            title: "Discount",
            type: "number"
        },
        {
            name: "orderDate",
            title: "Order Date",
            type: "datetime"
        },
        {
            name: "status",
            title: "Order Status",
            type: "string",
            options: {
                list: [
                    { title: "Pending", value: "pending" },
                    { title: "Success", value: "success" },
                    { title: "Dispatched", value: "dispatched" }
                ],
                layout: "radio"
            },
            initialValue: "pending"
        }
    ]
};
