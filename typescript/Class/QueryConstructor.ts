interface toulouseOpenDataQuery {
    dataset:string,
    q:string,
    rows:string,
    sort:string,
};
let baseURL:string = "https://data.toulouse-metropole.fr/api/records/1.0/search/";

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
        currentQuery[queryName] = query;
    }

    public toggleFilterForFree(){
        let currentQuery:any = this._queries;
        let currentQQuery: string = currentQuery['q'];
        if(currentQQuery.includes("gratuit")){
            
            let newQQuery = currentQQuery.replace('gratuit', '');
            this.addQuery(`q`, newQQuery);
        }else{
            currentQuery['q'] += " gratuit";
        }
       
    }
    public constructUrl = ():string => {
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