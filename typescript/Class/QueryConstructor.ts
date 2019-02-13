interface toulouseOpenDataQuery {
    dataset:string,
    q:string,
    rows:string,
    sort:string,
};

export default class QueryConstructor {
    private _queries:toulouseOpenDataQuery = {
        dataset : ``,
        q : ``,
        rows : ``,
        sort : ``,
    };

    get queries(){
        return this._queries;
    }
    set queries(newQueries:toulouseOpenDataQuery){
        this._queries = newQueries;
    }

    public addQuery(queryName:string, query = ``){
        let currentQuery:any = this._queries;
        currentQuery[queryName] = (queryName === 'q') ? `${currentQuery[queryName]}${query} ` : query;
    }

    public constructUrl = (baseURL: string):string => {
        return `${baseURL}?${this.constructQuery(this.queries)}`;
    }

    protected constructQuery = (queriesObject:any):string => {
        let queryString:string = ``;
        for(let queryElement in queriesObject){
            queryString += `${queryElement}=${encodeURI(queriesObject[queryElement])}&`;
        }
        return queryString;
    };
} 