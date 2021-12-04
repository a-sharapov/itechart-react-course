export class Api {
  static getUsers(options) {
    Object.assign(this, {
      url: "//jsonplaceholder.typicode.com/users/",
      append: "?_limit=8"
    }, options)
    try {
      const response = fetch(this.url + this.append)
        .then(response => response.json())
      return response
    } catch (error) {
      throw error
    }
  }
  static getUserByID(options) {
    Object.assign(this, {
      url: "//jsonplaceholder.typicode.com/users/",
    }, options)
    try {
      const response = fetch(this.url + this.append)
        .then(response => response.json())
      return response
    } catch (error) {
      throw error
    }
  }
  static putUser(options) {
    Object.assign(this, {
      url: "//jsonplaceholder.typicode.com/posts/1",
      method: "PUT"
    }, options)
    try {
      const response = fetch(this.url + this.append, {
        method: this.method,
        mode: 'cors',
        cache: 'no-cache'
      }).then(response => response.json())
      console.log(response)
      return response
    } catch (error) {
      throw error
    }
  }
  static editUser(options) {
    Object.assign(this, {
      url: "//jsonplaceholder.typicode.com/posts/1",
      method: "PATCH"
    }, options)
    try {
      const response = fetch(this.url + this.append, {
        method: this.method,
        mode: 'cors',
        cache: 'no-cache'
      }).then(response => response.json())
      console.log(response)
      return response
    } catch (error) {
      throw error
    }
  }
  static deleteUser(options) {
    Object.assign(this, {
      url: "//jsonplaceholder.typicode.com/posts/1",
      method: "DELETE"
    }, options)
    try {
      const response = fetch(this.url + this.append, {
        method: this.method,
        mode: 'cors',
        cache: 'no-cache'
      }).then(response => response.json())
      console.log(response)
      return response
    } catch (error) {
      throw error
    }
  }
}