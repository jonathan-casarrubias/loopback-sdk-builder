/* tslint:disable */
import { Injectable, Inject, Optional } from '@angular/core';
import { Http, Response } from '@angular/http';
import {
  LoopBackAuth,
  ErrorHandler,
  JSONSearchParams,
  BaseLoopBackApi,
} from '../core/index';
import {
  LoopBackFilter,
  User
} from '../../models/index';
import { LoopBackConfig } from '../../lb.config';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/share';

/**
 * Api services for the `User` model.
 */
@Injectable()
export class UserApi extends BaseLoopBackApi {

  constructor(
    @Inject(Http) http: Http,
    @Inject(LoopBackAuth) protected auth: LoopBackAuth, 
    @Inject(JSONSearchParams) protected searchParams: JSONSearchParams, 
    @Optional() @Inject(ErrorHandler) errorHandler: ErrorHandler
  ) {
    super(http, auth, searchParams, errorHandler);
  }

  /**
   * Find a related item by id for accessTokens.
   *
   * @param any id User id
   *
   * @param any fk Foreign key for accessTokens
   *
   * @returns object An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `User` object.)
   * </em>
   */
  public findByIdAccessTokens(id: any, fk: any) {
    let method: string = "GET";
    let url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() + "/Users/:id/accessTokens/:fk";
    let routeParams: any = {
      id: id,
      fk: fk
    };
    let urlParams : any = {};
    let postBody  : any = {};
    let result = this.request(method, url, routeParams, urlParams, postBody)
    return result.map((result: User | Array<User>) => Array.isArray(result)
                             ? result.map((instance: User)=> new User(instance))
                             : new User(result));
  }

  /**
   * Delete a related item by id for accessTokens.
   *
   * @param any id User id
   *
   * @param any fk Foreign key for accessTokens
   *
   * @returns object An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * This method returns no data.
   */
  public destroyByIdAccessTokens(id: any, fk: any) {
    let method: string = "DELETE";
    let url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() + "/Users/:id/accessTokens/:fk";
    let routeParams: any = {
      id: id,
      fk: fk
    };
    let urlParams : any = {};
    let postBody  : any = {};
    let result = this.request(method, url, routeParams, urlParams, postBody);
    return result;
  }

  /**
   * Update a related item by id for accessTokens.
   *
   * @param any id User id
   *
   * @param any fk Foreign key for accessTokens
   *
   * @param object data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   *
   * @returns object An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `User` object.)
   * </em>
   */
  public updateByIdAccessTokens(id: any, fk: any, data: any = undefined) {
    let method: string = "PUT";
    let url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() + "/Users/:id/accessTokens/:fk";
    let routeParams: any = {
      id: id,
      fk: fk
    };
    let urlParams : any = {};
    let postBody  : any = {
      data: data
    };
    let result = this.request(method, url, routeParams, urlParams, postBody);
    return result;
  }

  /**
   * Queries accessTokens of User.
   *
   * @param any id User id
   *
   * @param object filter 
   *
   * @returns object[] An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `User` object.)
   * </em>
   */
  public getAccessTokens(id: any, filter: LoopBackFilter = undefined) {
    let method: string = "GET";
    let url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() + "/Users/:id/accessTokens";
    let routeParams: any = {
      id: id
    };
    let urlParams : any = {
      filter: filter
    };
    let postBody  : any = {};
    let result = this.request(method, url, routeParams, urlParams, postBody);
    return result;
  }

  /**
   * Creates a new instance in accessTokens of this model.
   *
   * @param any id User id
   *
   * @param object data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   *
   * @returns object An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `User` object.)
   * </em>
   */
  public createAccessTokens(id: any, data: any = undefined) {
    let method: string = "POST";
    let url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() + "/Users/:id/accessTokens";
    let routeParams: any = {
      id: id
    };
    let urlParams : any = {};
    let postBody  : any = {
      data: data
    };
    let result = this.request(method, url, routeParams, urlParams, postBody);
    return result;
  }

  /**
   * Deletes all accessTokens of this model.
   *
   * @param any id User id
   *
   * @returns object An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * This method returns no data.
   */
  public deleteAccessTokens(id: any) {
    let method: string = "DELETE";
    let url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() + "/Users/:id/accessTokens";
    let routeParams: any = {
      id: id
    };
    let urlParams : any = {};
    let postBody  : any = {};
    let result = this.request(method, url, routeParams, urlParams, postBody);
    return result;
  }

  /**
   * Counts accessTokens of User.
   *
   * @param any id User id
   *
   * @param object where Criteria to match model instances
   *
   * @returns object An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * Data properties:
   *
   *  - `count` – `{number}` - 
   */
  public countAccessTokens(id: any, where: any = undefined) {
    let method: string = "GET";
    let url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() + "/Users/:id/accessTokens/count";
    let routeParams: any = {
      id: id
    };
    let urlParams : any = {
      where: where
    };
    let postBody  : any = {};
    let result = this.request(method, url, routeParams, urlParams, postBody);
    return result;
  }

  /**
   * Create a new instance of the model and persist it into the data source.
   *
   * @param object data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   *
   * @returns object An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `User` object.)
   * </em>
   */
  public create(data: any = undefined) {
    let method: string = "POST";
    let url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() + "/Users";
    let routeParams: any = {
    };
    let urlParams : any = {};
    let postBody  : any = {
      data: data
    };
    let result = this.request(method, url, routeParams, urlParams, postBody)
    return result.map((result: User | Array<User>) => Array.isArray(result)
                             ? result.map((instance: User)=> new User(instance))
                             : new User(result));
  }

  /**
   * Update an existing model instance or insert a new one into the data source.
   *
   * @param object data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   *
   * @returns object An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `User` object.)
   * </em>
   */
  public upsert(data: any = undefined) {
    let method: string = "PUT";
    let url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() + "/Users";
    let routeParams: any = {
    };
    let urlParams : any = {};
    let postBody  : any = {
      data: data
    };
    let result = this.request(method, url, routeParams, urlParams, postBody)
    return result.map((result: User | Array<User>) => Array.isArray(result)
                             ? result.map((instance: User)=> new User(instance))
                             : new User(result));
  }

  /**
   * Check whether a model instance exists in the data source.
   *
   * @param any id Model id
   *
   * @returns object An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * Data properties:
   *
   *  - `exists` – `{boolean}` - 
   */
  public exists(id: any) {
    let method: string = "GET";
    let url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() + "/Users/:id/exists";
    let routeParams: any = {
      id: id
    };
    let urlParams : any = {};
    let postBody  : any = {};
    let result = this.request(method, url, routeParams, urlParams, postBody);
    return result;
  }

  /**
   * Find a model instance by id from the data source.
   *
   * @param any id Model id
   *
   * @param object filter Filter defining fields and include
   *
   * @returns object An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `User` object.)
   * </em>
   */
  public findById(id: any, filter: LoopBackFilter = undefined) {
    let method: string = "GET";
    let url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() + "/Users/:id";
    let routeParams: any = {
      id: id
    };
    let urlParams : any = {
      filter: filter
    };
    let postBody  : any = {};
    let result = this.request(method, url, routeParams, urlParams, postBody)
    return result.map((result: User | Array<User>) => Array.isArray(result)
                             ? result.map((instance: User)=> new User(instance))
                             : new User(result));
  }

  /**
   * Find all instances of the model matched by filter from the data source.
   *
   * @param object filter Filter defining fields, where, include, order, offset, and limit
   *
   * @returns object[] An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `User` object.)
   * </em>
   */
  public find(filter: LoopBackFilter = undefined) {
    let method: string = "GET";
    let url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() + "/Users";
    let routeParams: any = {
    };
    let urlParams : any = {
      filter: filter
    };
    let postBody  : any = {};
    let result = this.request(method, url, routeParams, urlParams, postBody)
    return result.map((result: User | Array<User>) => Array.isArray(result)
                             ? result.map((instance: User)=> new User(instance))
                             : new User(result));
  }

  /**
   * Find first instance of the model matched by filter from the data source.
   *
   * @param object filter Filter defining fields, where, include, order, offset, and limit
   *
   * @returns object An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `User` object.)
   * </em>
   */
  public findOne(filter: LoopBackFilter = undefined) {
    let method: string = "GET";
    let url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() + "/Users/findOne";
    let routeParams: any = {
    };
    let urlParams : any = {
      filter: filter
    };
    let postBody  : any = {};
    let result = this.request(method, url, routeParams, urlParams, postBody)
    return result.map((result: User | Array<User>) => Array.isArray(result)
                             ? result.map((instance: User)=> new User(instance))
                             : new User(result));
  }

  /**
   * Update instances of the model matched by where from the data source.
   *
   * @param object where Criteria to match model instances
   *
   * @param object data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   *
   * @returns object An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * The number of instances updated
   */
  public updateAll(where: any = undefined, data: any = undefined) {
    let method: string = "POST";
    let url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() + "/Users/update";
    let routeParams: any = {
    };
    let urlParams : any = {
      where: where
    };
    let postBody  : any = {
      data: data
    };
    let result = this.request(method, url, routeParams, urlParams, postBody)
    return result.map((result: User | Array<User>) => Array.isArray(result)
                             ? result.map((instance: User)=> new User(instance))
                             : new User(result));
  }

  /**
   * Delete a model instance by id from the data source.
   *
   * @param any id Model id
   *
   * @returns object An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `User` object.)
   * </em>
   */
  public deleteById(id: any) {
    let method: string = "DELETE";
    let url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() + "/Users/:id";
    let routeParams: any = {
      id: id
    };
    let urlParams : any = {};
    let postBody  : any = {};
    let result = this.request(method, url, routeParams, urlParams, postBody);
    return result;
  }

  /**
   * Count instances of the model matched by where from the data source.
   *
   * @param object where Criteria to match model instances
   *
   * @returns object An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * Data properties:
   *
   *  - `count` – `{number}` - 
   */
  public count(where: any = undefined) {
    let method: string = "GET";
    let url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() + "/Users/count";
    let routeParams: any = {
    };
    let urlParams : any = {
      where: where
    };
    let postBody  : any = {};
    let result = this.request(method, url, routeParams, urlParams, postBody);
    return result;
  }

  /**
   * Update attributes for a model instance and persist it into the data source.
   *
   * @param any id User id
   *
   * @param object data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   *
   * @returns object An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `User` object.)
   * </em>
   */
  public updateAttributes(id: any, data: any = undefined) {
    let method: string = "PUT";
    let url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() + "/Users/:id";
    let routeParams: any = {
      id: id
    };
    let urlParams : any = {};
    let postBody  : any = {
      data: data
    };
    let result = this.request(method, url, routeParams, urlParams, postBody);
    return result;
  }

  /**
   * Create a change stream.
   *
   * @param object data Request data.
   *
   *  - `options` – `{object}` - 
   *
   * @returns object An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * Data properties:
   *
   *  - `changes` – `{ReadableStream}` - 
   */
  public createChangeStream(options: any = undefined) {
    let method: string = "POST";
    let url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() + "/Users/change-stream";
    let routeParams: any = {
    };
    let urlParams : any = {};
    let postBody  : any = {
      options: options
    };
    let result = this.request(method, url, routeParams, urlParams, postBody);
    return result;
  }

  /**
   * Login a user with username/email and password.
   *
   * @param string include Related objects to include in the response. See the description of return value for more details.
   *   Default value: `user`.
   *
   *  - `rememberMe` - `boolean` - Whether the authentication credentials
   *     should be remembered in localStorage across app/browser restarts.
   *     Default: `true`.
   *
   * @param object data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   *
   * @returns object An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * The response body contains properties of the AccessToken created on login.
   * Depending on the value of `include` parameter, the body may contain additional properties:
   * 
   *   - `user` - `{User}` - Data of the currently logged in user. (`include=user`)
   * 
   *
   */
  public login(credentials: any, include: any = "user") {
    let method: string = "POST";
    let url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() + "/Users/login";
    let routeParams: any = {
    };
    let urlParams : any = {
      credentials: credentials,
      include: include
    };
    let postBody  : any = credentials;
    let result = this.request(method, url, routeParams, urlParams, postBody)
      .share();
      result.subscribe(
        (response: { id: string, userId: string, user: any }) => {
          this.auth.setUser(response.id, response.userId, response.user);
          this.auth.setRememberMe(true);
          this.auth.save();
        },
        () => null
      );
      return result;
      
  }

  /**
   * Logout a user with access token.
   *
   * @param object data Request data.
   *
   *  - `access_token` – `{string}` - Do not supply this argument, it is automatically extracted from request headers.
   *
   * @returns object An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * This method returns no data.
   */
  public logout() {
    let method: string = "POST";
    let url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() + "/Users/logout";
    let routeParams: any = {
    };
    let urlParams : any = {
      access_token: this.auth.getAccessTokenId(),};
    let postBody  : any = {};
    this.auth.clearStorage();
    this.auth.clearUser(); 
    let result = this.request(method, url, routeParams, urlParams, postBody)
    let logout: Subject<boolean> = new Subject<boolean>();
    result.subscribe(() => {}, () => logout.next(true));
    return logout.asObservable();
  }

  /**
   * Confirm a user registration with email verification token.
   *
   * @param string uid 
   *
   * @param string token 
   *
   * @param string redirect 
   *
   * @returns object An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * This method returns no data.
   */
  public confirm(uid: string, token: string, redirect: string = undefined) {
    let method: string = "GET";
    let url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() + "/Users/confirm";
    let routeParams: any = {
    };
    let urlParams : any = {
      token: token,
      redirect: redirect
    };
    let postBody  : any = {};
    let result = this.request(method, url, routeParams, urlParams, postBody);
    return result;
  }

  /**
   * Reset password for a user with email.
   *
   * @param object data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   *
   * @returns object An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * This method returns no data.
   */
  public resetPassword(options: any) {
    let method: string = "POST";
    let url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() + "/Users/reset";
    let routeParams: any = {
    };
    let urlParams : any = {};
    let postBody  : any = {
      options: options
    };
    let result = this.request(method, url, routeParams, urlParams, postBody);
    return result;
  }
  /**
   * @ngdoc method
   * @name sdk.User#getCurrent
   * @methodOf sdk.User
   *
   * @description
   *
   * Get data of the currently logged user. Fail with HTTP result 401
   * when there is no user logged in.
   *
   * @returns object An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   */
  public getCurrent(): any {
    let method: string = "GET";

    let url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() + "/Users" + "/:id";
    let id: any = this.auth.getCurrentUserId();
    if (id == null) {
      id = '__anonymous__';
    }
    let urlParams: any = {
      id: id
    };

    let result = this.request(method, url, urlParams)
      .share();
    result.subscribe(
      (response: { resource: any }) => {
        this.auth.setCurrentUserData(response);
        return response.resource;
      },
      () => null
    );
    return result;
  }

  /**
   * Get data of the currently logged user that was returned by the last
   * call to {@link sdk.User#login} or
   * {@link sdk.User#getCurrent}. Return null when there
   * is no user logged in or the data of the current user were not fetched
   * yet.
   *
   * @returns object A User instance.
   */
  public getCachedCurrent() {
    return this.auth.getCurrentUserData();
  }

  /**
   * @name sdk.User#isAuthenticated
   *
   * @returns {boolean} True if the current user is authenticated (logged in).
   */
  public isAuthenticated() {
    return !(this.getCurrentId() === '' || this.getCurrentId() == null || this.getCurrentId() == 'null');
  }

  /**
   * @name sdk.User#getCurrentId
   *
   * @returns object Id of the currently logged-in user or null.
   */
  public getCurrentId() {
    return this.auth.getCurrentUserId();
  }

  /**
   * The name of the model represented by this $resource,
   * i.e. `User`.
   */
  public getModelName() {
    return "User";
  }
}
