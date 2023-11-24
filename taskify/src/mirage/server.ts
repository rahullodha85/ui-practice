import {createServer} from "miragejs";
import mocks from "./data.json";

const MockAPIService = () => {
    createServer({
        routes() {
            this.get(mocks.get_todos_success.endpoint, () => {
                console.log(mocks.get_todos_success.response);
                return mocks.get_todos_success.response;  
            })
        }
    })
};

export default MockAPIService;