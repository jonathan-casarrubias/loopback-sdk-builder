/* tslint:disable */
import {
  Like,
  Room
} from '../index';

declare var Object: any;
export interface MessageInterface {
  "text": string;
  "id"?: any;
  "parentId"?: any;
  "createdAt"?: Date;
  "updatedAt"?: Date;
  "roomId"?: any;
  likes?: Like[];
  replies?: Message[];
  parent?: Message;
  room?: Room;
}

export class Message implements MessageInterface {
  "text": string;
  "id": any;
  "parentId": any;
  "createdAt": Date;
  "updatedAt": Date;
  "roomId": any;
  likes: Like[];
  replies: Message[];
  parent: Message;
  room: Room;
  constructor(data?: MessageInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Message`.
   */
  public static getModelName() {
    return "Message";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Message for dynamic purposes.
  **/
  public static factory(data: MessageInterface): Message{
    return new Message(data);
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
      name: 'Message',
      plural: 'messages',
      properties: {
        "text": {
          name: 'text',
          type: 'string',
          default: ''
        },
        "id": {
          name: 'id',
          type: 'any'
        },
        "parentId": {
          name: 'parentId',
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
        "roomId": {
          name: 'roomId',
          type: 'any'
        },
      },
      relations: {
        likes: {
          name: 'likes',
          type: 'Like[]',
          model: 'Like'
        },
        replies: {
          name: 'replies',
          type: 'Message[]',
          model: 'Message'
        },
        parent: {
          name: 'parent',
          type: 'Message',
          model: 'Message'
        },
        room: {
          name: 'room',
          type: 'Room',
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
       text: '',
       id: <any>null,
       parentId: <any>null,
       createdAt: new Date(0),
       updatedAt: new Date(0),
       roomId: <any>null,
     };
    return Message.factory(instance);
  }
}
