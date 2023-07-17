/**
 * @param {string[]} req_skills
 * @param {string[][]} people
 * @return {number[]}
 */
var smallestSufficientTeam = function(req_skills, people) {
    let skm = new Map();
    for(let [ind,skill] of req_skills.entries())
        skm.set(skill,ind);
    let dp = new Map();
    dp.set(0,[]);
    for(let [ind,ar] of people.entries()){
        let skill = 0;
        for(let sk of ar)
            skill=skill|(1<<skm.get(sk));
        for(let [val,ar] of dp){
            val=val|skill;
            if((!dp.has(val))||(dp.get(val).length>ar.length+1))
                dp.set(val,[...ar,ind]);
        }
    }
    return dp.get((1<<(req_skills.length))-1);
};