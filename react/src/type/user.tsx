type UserType = {
    id?:string,
    name:string,
    email:{
        type: string,
        required: true
    },
    password:{
        type:string,
        required:true
    }
}

export default UserType