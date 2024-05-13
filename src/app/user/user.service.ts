import { Injectable } from '@angular/core';
import axios from 'axios';
import { ResponseModel } from '../Responsemodel';

import { response } from 'express';
import { UserModel } from './UserModel';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  API_URL = `http://localhost:5224/api/`;

  GetUserAsync = async (
  ): Promise<ResponseModel> => {
    let result: ResponseModel
      = {
      error: "",
      data: null,
      message: "",
      errorCode: "",
    };

    await axios
      .get(`${this.API_URL}user`)
      .then(function (response) {
        result.data = response.data;
      })
      .catch((error) => {
        this.handleError(error, result);
        alert(JSON.stringify(error));
      })
    return result;
  };

  CreateUserAsync = async(
    data : UserModel
  ) : Promise<ResponseModel> => {
    let result : ResponseModel = {
      error: '',
      data: undefined,
      message: '',
      errorCode: ''
    }

    await axios
    .post(`${this.API_URL}user`,data)
    .then((response) => {
      result.data = response.data; 
    } )
    .catch((error) => {
      this.handleError(error, result);
      alert(JSON.stringify(error));
    })

    return result;
  }

  UpdateUserAsync = async(
    data : UserModel,
  ) : Promise<ResponseModel> => {
    let result : ResponseModel = {
      error: '',
      data: undefined,
      message: '',
      errorCode: ''
    }

    await axios
    .put(`${this.API_URL}user/${data.id}`,data)
    .then((response) => {
      result.data = response.data; 
    } )
    .catch((error) => {
      this.handleError(error, result);
      alert(JSON.stringify(error));
    })

    return result;
  }

  GetUserByIdAsync = async (id : number
  ): Promise<ResponseModel> => {
    let result: ResponseModel
      = {
      error: "",
      data: null,
      message: "",
      errorCode: "",
    };

    await axios
      .get(`${this.API_URL}user/${id}`)
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
