export type householdData={
   
    effective_date: string, 
    has_married_couple: string,
    income: string,
    unemployment_received:boolean,
    people: [],
    age: number, 
    dob: string, 
    aptc_eligible: boolean,
    does_not_cohabitate: boolean, 
    gender:string 
    has_mec: boolean,
    is_parent: boolean, 
    is_pregnant: boolean, 
    relationship: string, 
    uses_tobacco: boolean, 
    utilization: string,
    market: string,
    place: {
        countfips: number,
        state: string,
        zipcode: string,
    },
    year: number,
}