export const Button = ({className, onClickFuction = null, buttonName = null}) => {
  return (
    <button className={className} onClick={onClickFuction}>{buttonName}</button>
  );
};
