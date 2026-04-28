import  {pool} from '../config/db.js';

class FrutasService {
    async getALL(){
        try{
            const query = "SELECT * FROM frutas"
            const res = await pool.query(query)
            return res.rows;
        } catch (error) {
            console.log(error);
        }
    }
}

export const frutasService = new FrutasService();