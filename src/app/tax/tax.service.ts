import { Injectable } from '@angular/core';
import axios from 'axios';
import { ResponseModel } from '../Responsemodel';
import { TaxModel } from './TaxModel';
import { response } from 'express';

@Injectable({
  providedIn: 'root'
})
export class TaxService {

  API_URL = `http://localhost:5224/api/`;

  GetTaxAsync = async (
  ): Promise<ResponseModel> => {
    let result: ResponseModel
      = {
      error: "",
      data: null,
      message: "",
      errorCode: "",
    };

    await axios
      .get(`${this.API_URL}tax`)
      .then(function (response) {
        result.data = response.data;
      })
      .catch((error) => {
        this.handleError(error, result);
        alert(JSON.stringify(error));
      })
    return result;
  };

  CreateTaxAsync = async(
    data : TaxModel
  ) : Promise<ResponseModel> => {
    let result : ResponseModel = {
      error: '',
      data: undefined,
      message: '',
      errorCode: ''
    }

    await axios
    .post(`${this.API_URL}tax`,data)
    .then((response) => {
      result.data = response.data; 
    } )
    .catch((error) => {
      this.handleError(error, result);
      alert(JSON.stringify(error));
    })

    return result;
  }

  UpdateTaxAsync = async(
    data : TaxModel,
  ) : Promise<ResponseModel> => {
    let result : ResponseModel = {
      error: '',
      data: undefined,
      message: '',
      errorCode: ''
    }

    await axios
    .put(`${this.API_URL}tax/${data.id}`,data)
    .then((response) => {
      result.data = response.data; 
    } )
    .catch((error) => {
      this.handleError(error, result);
      alert(JSON.stringify(error));
    })

    return result;
  }

  GetTaxByIdAsync = async (id : number
  ): Promise<ResponseModel> => {
    let result: ResponseModel
      = {
      error: "",
      data: null,
      message: "",
      errorCode: "",
    };

    await axios
      .get(`${this.API_URL}tax/${id}`)
      .then(function (response) {
        result.data = response.data;
      })
      .catch((error) => {
        this.handleError(error, result);
        alert(JSON.stringify(error));
      })
    return result;
  };

  handleError = (error: any, result: ResponseModel) => {
    if (error.response) {
      result.error = error.response.data;
      result.errorCode = error.response.status;
      result.message = error.message;
    } else if (error.request) {
      result.error = error.message;
      result.errorCode = error.request.code;
      result.message = error.message;
    } else {
      result.error = "No response received from server";
      result.errorCode = error.response ? error.response.status : "";
    }
  };

}
