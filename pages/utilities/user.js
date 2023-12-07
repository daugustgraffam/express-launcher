const date= process.env.DATE
let sqId= process.env.USERNAME
const userBranch = process.env.BRANCH
let rand = Math.floor(Math.random()*100);
let user= {
  password: process.env.PASSWORD,
  firstName: 'Dot',
  lastName: 'Matrix',
  siteName: process.env.SITENAME,
  email: process.env.EMAIL,
  branch: process.env.BRANCH || '/signup',
  businessName: 'Sifter Filtration Services',
  sosAddress: '1583 Duncan Ave',
  sosPostalCode: '10016',
  sosFirstName: 'Cliff',
  sosLastName: 'Bowman',
  sosBirthdateMonth: '2',
  sosBirthdateDay: '1',
  sosBirthdateYear: '1985',
  sosSSN: '9818',
  sosPhone: '415-555-1212',
  address: '558 Broadway',
  postalCode: '10012',
  itemURL: userBranch+'/app/front-door/onboarding?#/item-type'
  //Cliff Bowman 1583+Duncan+Ave 10016 2 1 1985 9818 %28415%29+555-1212</data>
};
module.exports= {
  user
};
