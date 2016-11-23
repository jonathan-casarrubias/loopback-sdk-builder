/* tslint:disable */
import {
  Account,
  Room
} from '../index';

declare var Object: any;
export interface RoomAccountInterface {
  id?: number;
  accountId?: number;
  roomId?: number;
  account?: Account;
  room?: Room;
}

export class RoomAccount implements RoomAccountInterface {
  id: number;
  accountId: number;
  roomId: number;
  account: Account;
  room: Room;
  constructor(instance?: RoomAccountInterface) {
    Object.assign(this, instance);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `RoomAccount`.
   */
  public static getModelName() {
    return "RoomAccount";
  }
  public static getModelDefinition() {
    return {
      name: 'RoomAccount',
      properties: [
        {
          name: 'id',
          type: 'number'
        },
        {
          name: 'accountId',
          type: 'number'
        },
        {
          name: 'roomId',
          type: 'number'
        },
      ],
      relations: [
        {
          name: 'account',
          type: 'Account'
        },
        {
          name: 'room',
          type: 'Room'
        },
      ]
    }
  }
}
