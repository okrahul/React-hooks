import "../App.css";

export interface IDetailsCardProps {
  avatar: string;
  name: string;
  company: string;
}

export function DetailsCard({ avatar, name, company }: IDetailsCardProps) {
  return (
    <div className="cardBox">
      <img src={avatar} alt={name} className="avatar" />
      <div className="details">
        <h3>{name}</h3>
        <p>{company}</p>
      </div>
    </div>
  );
}
