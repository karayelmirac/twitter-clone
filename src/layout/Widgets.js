import React from "react";
import { SearchIcon } from "@/icons/Icon";
const Widgets = () => {
  return (
    <aside className="w-80">
      <div className="flex items-center space-x-4 p-3 m-3 bg-gray-200 rounded-full text-gray-dark focus-within:bg-white focus-within:ring-1 focus-within:ring-primary-base focus-within:text-primary-base">
        <SearchIcon className="w-5 h-5" />
        <input
          type="text"
          placeholder="Search Twitter"
          className="placeholder-gray-dark bg-transparent focus:outline-none w-full text-sm "
        />
      </div>
      <div className="mt-5 px-2">
        <p className=" max-h-screen overflow-auto font-medium text-gray-700">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
          amet quaerat inventore numquam sed mollitia placeat necessitatibus
          dolorem, enim fuga voluptas? Delectus aperiam quod suscipit eum vero
          excepturi temporibus magni aliquam, fuga rem? Dolore fugiat provident
          nam libero ut cumque, iusto ducimus facere voluptatibus deleniti modi
          delectus voluptas atque sunt eveniet voluptatum labore consequuntur
          consequatur est veritatis quae quasi perferendis ratione tenetur.
          Pariatur corrupti explicabo hic totam, rerum est eveniet quia nulla
          reprehenderit voluptas provident aut voluptates officia animi cumque.
          Est cumque obcaecati, quia, dignissimos voluptate rerum facilis harum
          qui eos odio alias veniam suscipit molestias provident ex omnis
          dolorum. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Tempora dolorem velit debitis in asperiores facere, consectetur
          dolores nulla praesentium sed repellendus soluta quidem animi adipisci
          ducimus labore cumque eveniet distinctio! Voluptate sapiente,
          recusandae tempore inventore velit assumenda, dolor fuga voluptas
          laudantium nemo soluta et rem doloremque, odit aspernatur. Possimus
          architecto maiores debitis consectetur et, ipsam fugit? Amet sunt
          quibusdam minus id, cupiditate ducimus veritatis!
        </p>
      </div>
    </aside>
  );
};

export default Widgets;
