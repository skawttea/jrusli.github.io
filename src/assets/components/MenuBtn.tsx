
interface MenuBtnProps {
  children: string
}


const MenuBtn = ({children}: MenuBtnProps) => {
  return (
      <button className='btn btn-primary'>{children}</button>
  );
};

export default MenuBtn;


