function HeaderIcon({ Icon, active }) {
  return (
    <div
      className=" flex items-center cursor-pointer md:px-10 sm:h-10  md:hover:bg-gray-100 border-xl 
    active:border-b-2 active:border-blue-500 group"
    >
      <Icon
        className={`text-gray-500 h-5 group-hover:text-blue-500 sm:h-7 space-auto ${
          active && "text-blue-500"
        }`}
      />
    </div>
  );
}

export default HeaderIcon;
