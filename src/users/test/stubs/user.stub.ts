import { User } from "../../../users/models/user.model";

export const userStub=():Partial<User>=>{
    return {
        id:1,
        name:'user1',
        email:'user1@gmail.com',
        password:'12344',
        is_active:true,
    };
};