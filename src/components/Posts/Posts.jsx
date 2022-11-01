import Post from "./Post";
import styles from "./Posts.module.css";

const Posts = () => {
    return (
        <div className={styles.posts}>
            <Post
                author={{name: "Anonim", avatar: "https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"}}
                post={{date: "2022-10-31", text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tristique mauris ligula, ut ultricies lacus ultricies sit amet. Sed gravida suscipit ornare. Phasellus dapibus gravida enim, id vestibulum dolor vulputate vitae. Suspendisse vel justo sit amet ante convallis pharetra at at ipsum. Duis hendrerit tincidunt risus, a pretium mauris molestie ac."}} />
            <Post
                author={{name: "Anonim", avatar: "https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"}}
                post={{date: "2022-10-30", text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tristique mauris ligula, ut ultricies lacus ultricies sit amet. Sed gravida suscipit ornare. Phasellus dapibus gravida enim, id vestibulum dolor vulputate vitae. Suspendisse vel justo sit amet ante convallis pharetra at at ipsum. Duis hendrerit tincidunt risus, a pretium mauris molestie ac. Quisque facilisis dolor quis mi posuere, nec accumsan quam aliquam. Donec purus risus, ornare non felis et, pharetra gravida augue. Nam eu lectus sed nibh fermentum tempor. Sed eget tellus nulla. Sed orci sapien, bibendum non erat tincidunt, sagittis pulvinar ipsum. Aliquam erat volutpat. Pellentesque a arcu sed turpis cursus pharetra et sed odio. Aenean aliquam condimentum urna, vel tempus ipsum fringilla sit amet."}} />
        </div>
    );
};

export default Posts;