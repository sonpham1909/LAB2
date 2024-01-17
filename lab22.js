document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
document.querySelector('button').addEventListener('click',function(){
 const text = document.querySelector('textarea').value;
 const rows = text.split('\n');
 console.log(rows);
 for(const [i,row] of rows.entries()){
    const [first,Second] = row.toLocaleLowerCase().trim().split('_');
   
    const output = `${first}${Second.replace(
        Second[0],
        Second[0].toUpperCase())}`;
    console.log(`${output.padEnd(20)}${'✅'.repeat(i+
        1)}`);
 }
});
// underscore_case
// first_name
// Some_Variable
// calculate_AGE
// delayed_departure