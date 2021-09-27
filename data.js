const people = [
  {
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/c_scale,w_200/v1595959121/person-1_aufeoq.jpg",
    name: "peter doe",
    job: "product manager",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quoeius recusandae officia voluptas sint deserunt dicta nihil nam omnis? `,
  },
  {
    img: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzR8fHByb2ZpbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60g",
    name: "iliyana",
    job: "developer",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quoeius recusandae officia voluptas sint deserunt dicta nihil nam omnis?`,
  },
  {
    img: "https://images.unsplash.com/photo-1520592978680-efbdeae5d036?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fHByb2ZpbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60",
    name: "emma doe",
    job: "designer",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quoeius recusandae officia voluptas sint deserunt dicta nihil nam omnis?`,
  },
  {
    img: "https://images.unsplash.com/photo-1520410006060-eb5c4710b802?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDV8fHByb2ZpbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    name: "john doe",
    job: "software engineer",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quoeius recusandae officia voluptas sint deserunt dicta nihil nam omnis?`,
  },

  {
    img: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fHByb2ZpbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    name: "ami jackson",
    job: "software developer",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quoeius recusandae officia voluptas sint deserunt dicta nihil nam omnis?`,
  },
  {
    img: "https://images.unsplash.com/photo-1517070208541-6ddc4d3efbcb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fHByb2ZpbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    name: "morgan",
    job: "software engineer",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quoeius recusandae officia voluptas sint deserunt dicta nihil nam omnis?`,
  },
  {
    img: "https://images.unsplash.com/photo-1579533183840-16ee351d4dfb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTY0fHxwcm9maWxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    name: "melina",
    job: "product manager",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quoeius recusandae officia voluptas sint deserunt dicta nihil nam omnis? `,
  },
  {
    img: "https://images.unsplash.com/photo-1608155686393-8fdd966d784d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTd8fHByb2ZpbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    name: "susan doe",
    job: "software engineer",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quoeius recusandae officia voluptas sint deserunt dicta nihil nam omnis?`,
  },
  {
    img: "https://images.unsplash.com/photo-1610108702802-c26578e1adae?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjE5fHxwcm9maWxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    name: "alex",
    job: "designer",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quoeius recusandae officia voluptas sint deserunt dicta nihil nam omnis?`,
  },
  {
    img: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2ZpbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    name: "john",
    job: "software engineer",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quoeius recusandae officia voluptas sint deserunt dicta nihil nam omnis?`,
  },

  {
    img: "https://images.unsplash.com/photo-1455274111113-575d080ce8cd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fHByb2ZpbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    name: "michal",
    job: "ethical hacker",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quoeius recusandae officia voluptas sint deserunt dicta nihil nam omnis?`,
  },
  {
    img: "https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHByb2ZpbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    name: "jenifer",
    job: "doctor",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quoeius recusandae officia voluptas sint deserunt dicta nihil nam omnis?`,
  },
];
export default people;
