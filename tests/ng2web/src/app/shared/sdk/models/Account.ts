/* tslint:disable */
import {
  Room
} from '../index';

declare var Object: any;
export interface AccountInterface {
  "realm"?: string;
  "username"?: string;
  "email": string;
  "emailVerified"?: boolean;
  "id"?: any;
  "createdAt": Date;
  "updatedAt": Date;
  "password"?: string;
  accessTokens?: any[];
  rooms?: Room[];
  administrations?: Room[];
}

export class Account implements AccountInterface {
  "realm": string;
  "username": string;
  "email": string;
  "emailVerified": boolean;
  "id": any;
  "createdAt": Date;
  "updatedAt": Date;
  "password": string;
  accessTokens: any[];
  rooms: Room[];
  administrations: Room[];
  constructor(data?: AccountInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Account`.
   */
  public static getModelName() {
    return "Account";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Account for dynamic purposes.
  **/
  public static factory(data: AccountInterface): Account{
    return new Account(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'Account',
      plural: 'accounts',
      properties: {
        "realm": {
          name: 'realm',
          type: 'string'
        },
        "username": {
          name: 'username',
          type: 'string'
        },
        "email": {
          name: 'email',
          type: 'string'
        },
        "emailVerified": {
          name: 'emailVerified',
          type: 'boolean'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
        "createdAt": {
          name: 'createdAt',
          type: 'Date'
        },
        "updatedAt": {
          name: 'updatedAt',
          type: 'Date'
        },
        "password": {
          name: 'password',
          type: 'string'
        },
      },
      relations: {
        accessTokens: {
          name: 'accessTokens',
          type: 'any[]',
          model: ''
        },
        rooms: {
          name: 'rooms',
          type: 'Room[]',
          model: 'Room'
        },
        administrations: {
          name: 'administrations',
          type: 'Room[]',
          model: 'Room'
        },
      }
    }
  }

  /**
  * @method emptyInstanceFactory
  * @author Michal Fraczkiewicz <bonaventoora@gmail.com>
  * @license MIT
  * This method returns an object instance with attributes initialised with default values
  * (to insert it into angular's FormBuilder for example).
  *
  * @example
  * // creates form group with fields from model definition
  * this.form = this._formBuilder.group(MeanModel.emptyInstanceFactory());
  **/
  public static emptyInstanceFactory() {
    let instance = {
       realm: '',
       username: '',
       password: '',
       email: '',
       emailVerified: false,
       verificationToken: '',
       id: <any>null,
       createdAt: new Date(0),
       updatedAt: new Date(0),
     };
    return Account.factory(instance);
  }
}
