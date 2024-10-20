export default function ProfileHeader() {
  const name = "Konstantinos Kastritis";
  const title = "Computational Physicist | Data Scientist";
  return (
    <div className="m-8">
      <div>
        <h2 className="text-2xl/tight text-center font-bold md:text-4xl/tight">
          {name}
        </h2>
        <p className="text-md text-center md:text-xl"> {title} </p>
      </div>
    </div>
  );
}
