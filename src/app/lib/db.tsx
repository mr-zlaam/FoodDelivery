const { USERNAME, PASSWORD } = process.env;

export const connectionStr: string = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.ewnbcj8.mongodb.net/FoodDB?retryWrites=true&w=majority`;
