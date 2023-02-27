import bcrypt from 'bcryptjs';

export const hashPassword = async(password:string) =>{
    return await bcrypt.hash(password, 12);
}

export const checkPasswords = async(password:string, hashPassword:string) =>{
    try{
        return await bcrypt.compare(password, hashPassword);
    }catch(err){
        if (err instanceof Error){
            console.log(err);
            return false;
        }
    }
}
