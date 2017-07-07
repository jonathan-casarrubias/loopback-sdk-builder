/* tslint:disable */

declare var Object: any;
export interface ApplicationCredentialInterface {
  "provider"?: string;
  "authScheme"?: string;
  "credentials"?: string;
  "created"?: Date;
  "modified"?: Date;
  "userId"?: any;
  "id"?: any;
  "createdAt": Date;
  "updatedAt": Date;
}

export class ApplicationCredential implements ApplicationCredentialInterface {
  "provider": string;
  "authScheme": string;
  "credentials": string;
  "created": Date;
  "modified": Date;
  "userId": any;
  "id": any;
  "createdAt": Date;
  "updatedAt": Date;
  constructor(data?: ApplicationCredentialInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ApplicationCredential`.
   */
  public static getModelName() {
    return "ApplicationCredential";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of ApplicationCredential for dynamic purposes.
  **/
  public static factory(data: ApplicationCredentialInterface): ApplicationCredential{
    return new ApplicationCredential(data);
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
      name: 'ApplicationCredential',
      plural: 'application-credentials',
      properties: {
        "provider": {
          name: 'provider',
          type: 'string',
          default: 'authScheme'
        },
        "authScheme": {
          name: 'authScheme',
          type: 'string',
          default: ''
        },
        "credentials": {
          name: 'credentials',
          type: 'string',
          default: ''
        },
        "created": {
          name: 'created',
          type: 'Date'
        },
        "modified": {
          name: 'modified',
          type: 'Date'
        },
        "userId": {
          name: 'userId',
          type: 'any'
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
      },
      relations: {
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
       provider: 'authScheme',
       authScheme: '',
       credentials: '',
       created: new Date(0),
       modified: new Date(0),
       userId: <any>null,
       id: <any>null,
       createdAt: new Date(0),
       updatedAt: new Date(0),
     };
    return ApplicationCredential.factory(instance);
  }
}
