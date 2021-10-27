import { AxiosResponse } from "axios";
import http from "../http-common"
import BikeDTO from "./models";

type onSuccessListOfBikes = (bikes: BikeDTO[]) => void
type onApiError = () => void

class BikesApi {

    getAllBikes(onSuccess: onSuccessListOfBikes,
                onError: onApiError): void {

        http
            .get<BikeDTO[]>("/bikes")
            .then( (response: AxiosResponse<BikeDTO[]>) => {
                console.log(response)
                onSuccess(response.data)
            }).catch((error) => {
                console.error(error)
                onError()
            })
    }

}

export default BikesApi