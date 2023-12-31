import { User } from "../model/user.model.js";

const addNewUser = async (req, res) => {
    try {
        console.log("try");
        const addUser = await User.create(req.body);
        if (!addUser) res.send("error");
        res.status(201).send(addUser);
    } catch (error) {
        console.error(error);
        res.status(500).send("Failed to add a new user");
    }
};

export { addNewUser };