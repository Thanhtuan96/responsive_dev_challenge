const skills = document.querySelector('.skills');
const hobbies = document.querySelector('.hobbies');
const skills_data = [
  { name: 'HTML', Progress: '60', color: 'blue' },
  { name: 'CSS', Progress: '70', color: 'red' },
  { name: 'JS', Progress: '55', color: 'blue' },
  { name: 'NodeJs', Progress: '45', color: 'blue' },
  { name: 'ReactJs', Progress: '35', color: 'blue' },
  { name: 'Firebase', Progress: '40', color: 'blue' },
];
const hobies_data = [
  {
    name: 'photographer',
    url: 'https://images.unsplash.com/photo-1493863641943-9b68992a8d07?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvdG9ncmFwaGVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
    description: 'loreadfashdflkhaskdfhklasdf',
  },
  {
    name: 'travel',
    url: 'https://images.unsplash.com/photo-1530789253388-582c481c54b0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8dHJhdmVsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
    description: 'loreadfashdflkhaskdfhklasdf',
  },
  {
    name: 'bartender',
    url: 'https://images.unsplash.com/photo-1595751866979-de6e9d606220?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmFydGVuZGVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
    description: 'loreadfashdflkhaskdfhklasdf',
  },
];

window.addEventListener('DOMContentLoaded', () => {
  const datas = skills_data
    .map((item) => {
      return `
      
      <div class="skill-tag">
<span>${item.name}</span>
<progress value="${item.Progress}" max="100"></progress>
</div>`;
    })
    .join('');
  const hobiesData = hobies_data
    .map((item) => {
      return `<div class='hobbies-tag'>
            <div class='hobbie-img' style="background:url('${item.url}');">
            <div class='overlay'>
                <p class='hobbies-name'>${item.name}</p>
            </div>
            </div>
            <p class='description'>${item.description}</p>
        </div>`;
    })
    .join('');
  skills.innerHTML = datas;
  hobbies.innerHTML = hobiesData;
});
