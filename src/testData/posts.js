const posts = [
  {
    id: 1,
    author: {
      name: "Sergey Udovenko",
      avatar: "https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png",
    },
    post: {
      date: "2022-10-31",
      text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tristique mauris ligula, ut ultricies lacus ultricies sit amet. Sed gravida suscipit ornare. Phasellus dapibus gravida enim, id vestibulum dolor vulputate vitae. Suspendisse vel justo sit amet ante convallis pharetra at at ipsum. Duis hendrerit tincidunt risus, a pretium mauris molestie ac.",
    },
  },
  {
    id: 2,
    author: {
      name: "Sofia Beauty",
      avatar: "https://cdn-icons-png.flaticon.com/512/194/194938.png",
    },
    post: {
      date: "2022-11-01",
      text:"Aliquam id aliquet sem. Phasellus viverra, mi non suscipit vestibulum, nulla ipsum facilisis sem, at auctor dui metus vitae mauris. Nam vel mauris sed lectus mollis mattis. Integer placerat malesuada augue, a tempor lectus ultricies et. Suspendisse efficitur ipsum nec sapien vehicula dictum. Quisque sit amet massa ut urna imperdiet mattis sed nec lorem. Nulla pharetra vulputate lectus id ultricies. Sed ut erat ut justo laoreet finibus. Nullam ultrices mi a eros ultricies ullamcorper. Fusce sagittis neque nec libero tempus, in gravida est commodo. Cras ultricies, tellus in hendrerit condimentum, nunc arcu imperdiet augue, vel gravida neque sem eget neque.",
    },
  },
  {
    id: 3,
    author: {
      name: "Gleb Moscha",
      avatar: "https://cdn-icons-png.flaticon.com/512/2393/2393073.png",
    },
    post: {
      date: "2022-11-01",
      text:"Quisque aliquam urna massa. Sed feugiat mattis diam sit amet pulvinar. Vestibulum sed interdum mi. Ut varius, magna in facilisis ultrices, lectus justo dignissim purus, eu dapibus elit sem pretium elit. Maecenas felis nulla, sagittis at sem et, dapibus scelerisque elit. Vivamus ac finibus tellus. Vivamus mauris magna, laoreet sed purus quis, volutpat commodo dolor. Fusce egestas porta magna id condimentum. Integer faucibus dolor lorem, vitae fermentum sapien viverra quis. Nam sem dui, commodo sit amet magna sit amet, maximus dignissim ligula. Morbi suscipit laoreet dolor vitae porttitor. Ut non ipsum mattis, consectetur urna quis, malesuada ex. Quisque ultrices purus quis accumsan dignissim. Aliquam placerat ultrices purus. Donec quam odio, convallis nec ante sit amet, fermentum mollis nibh.",
    },
  },
  {
    id: 4,
    author: {
      name: "Sergey Udovenko",
      avatar: "https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png",
    },
    post: {
      date: "2022-11-02",
      text:"Nam non pharetra nunc. Nullam eros magna, finibus vel congue eget, dignissim eu massa. Pellentesque volutpat ultricies porta. Proin pretium orci sed scelerisque hendrerit. Vestibulum massa erat, posuere vel lacus quis, vehicula auctor ex. Maecenas orci est, commodo eget ornare ac, aliquam quis enim. Nam non vulputate magna. Vestibulum id est et augue scelerisque eleifend sed id metus. Nulla faucibus tincidunt urna, eget posuere mi aliquam eu. Praesent in viverra enim. Donec vel diam pulvinar, congue velit ut, ullamcorper leo.",
    },
  },
  {
    id: 5,
    author: {
      name: "Sergey Udovenko",
      avatar: "https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png",
    },
    post: {
      date: "2022-11-03",
      text:"Praesent tempus porttitor orci quis consequat. Nullam consequat diam libero. Praesent elementum, eros sed cursus iaculis, dui mauris imperdiet ex, ut eleifend lacus arcu sed lectus. Duis efficitur blandit efficitur. Morbi sodales in libero mollis faucibus. Etiam nisi tellus, fringilla nec elementum sit amet, pulvinar id ex. Maecenas dictum in dolor a laoreet. Nullam ornare urna vitae nunc eleifend, vitae posuere lorem euismod. Duis velit felis, dapibus vitae scelerisque vel, eleifend sed purus. Sed sit amet varius dolor, non maximus quam. Donec rutrum accumsan diam, vestibulum facilisis massa imperdiet eu. Fusce tristique tortor id odio mollis imperdiet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;",
    },
  },
  {
    id: 6,
    author: {
      name: "Sergey Klavchenko",
      avatar: "https://cdn-icons-png.flaticon.com/512/2316/2316128.png",
    },
    post: {
      date: "2022-11-03",
      text:"Curabitur sit amet sagittis eros, hendrerit faucibus leo. Vestibulum et sodales nisi. Maecenas in ex a nisl euismod dictum. In hac habitasse platea dictumst. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec mollis vel arcu nec porttitor. Etiam non fringilla est, nec consectetur dui. In a hendrerit nisl. Ut vitae viverra diam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed lacinia felis nec metus posuere posuere. Integer vehicula gravida volutpat. Sed id lectus eget odio sollicitudin tristique.",
    },
  },
  {
    id: 7,
    author: {
      name: "Sergey Udovenko",
      avatar: "https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png",
    },
    post: {
      date: "2022-11-03",
      text:"Cras velit erat, consequat sit amet neque sit amet, fermentum lobortis nisl. Aenean vel urna sed nisl lobortis posuere. Integer non felis ac eros rutrum sagittis. Maecenas ac quam in nunc auctor feugiat a et ligula. Sed convallis elementum dui in dictum. Proin felis magna, viverra id nunc nec, condimentum auctor quam. Integer eget nisi et orci dapibus congue. Nulla facilisi. Phasellus orci nisl, accumsan eu neque et, mollis scelerisque justo. Nunc molestie, nisi et tempor lacinia, est ante eleifend erat, id malesuada mi purus et quam. Nulla rutrum sit amet lacus et imperdiet.",
    },
  },
];

export default posts;