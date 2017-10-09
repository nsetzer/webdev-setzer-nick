
export class Page {

    _id : string;
    name: string;
    websiteId: string;
    title: string;
    description: string;

    constructor(_id : string,
                name: string,
                websiteId: string,
                title: string,
                description: string) {
        this._id = _id;
        this.name = name;
        this.websiteId = websiteId;
        this.title = title;
        this.description = description;
    }

    static getDefaultPages() {
      let pages = [
        new Page( "321", "Post 1", "456", "Post 1", "Lorem" ),
        new Page( "432", "Post 2", "456", "Post 2", "Lorem" ),
        new Page( "543", "Post 3", "456", "Post 3", "Lorem" ),
        new Page( "100", "Post 1", "123", "Post 1", "Lorem" ),
        new Page( "101", "Post 2", "123", "Post 2", "Lorem" ),
        new Page( "102", "Post 3", "123", "Post 3", "Lorem" ),
        new Page( "110", "Post 1", "234", "Post 1", "Lorem" ),
        new Page( "111", "Post 2", "234", "Post 2", "Lorem" ),
        new Page( "112", "Post 3", "234", "Post 3", "Lorem" ),
        new Page( "120", "Lang"  , "890", "Post 1", "Lorem" ),
        new Page( "121", "Game",   "890", "Post 2", "Lorem" ),
        new Page( "122", "Home" ,  "890", "Post 3", "Lorem" ),
        new Page( "130", "Easy",   "567", "Post 1", "Lorem" ),
        new Page( "131", "Medium", "567", "Post 2", "Lorem" ),
        new Page( "132", "Hard",   "567", "Post 3", "Lorem" ),
        new Page( "140", "Post 1", "678", "Post 1", "Lorem" ),
        new Page( "141", "Post 2", "678", "Post 2", "Lorem" ),
        new Page( "142", "Post 3", "678", "Post 3", "Lorem" ),
        new Page( "150", "Post 1", "789", "Post 1", "Lorem" ),
        new Page( "151", "Post 2", "789", "Post 2", "Lorem" ),
        new Page( "152", "Post 3", "789", "Post 3", "Lorem" )
      ]
      return pages;
    }



}