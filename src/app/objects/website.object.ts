

export class Website {

    _id : string;
    name: string;
    developerId: string;
    description: string;

    constructor(_id : string,
                name: string,
                developerId: string,
                description: string) {
        this._id = _id;
        this.name = name;
        this.developerId = developerId;
        this.description = description;
    }

    static getDefaultSites() {
      let sites = [
        new Website("123", "Facebook",    "456", "Lorem" ),
        new Website("234", "Tweeter",     "456", "Lorem" ),
        new Website("456", "Gizmodo",     "456", "Lorem" ),
        new Website("890", "Go",          "123", "Lorem" ),
        new Website("567", "Tic Tac Toe", "123", "Lorem" ),
        new Website("678", "Checkers",    "123", "Lorem" ),
        new Website("789", "Chess",       "234", "Lorem" )
      ]
      return sites;
    }



}