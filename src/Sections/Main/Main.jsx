import { Description } from "./description/description";
import { ProfileImage } from "./profile-image/ProfileImage";
import { Skills } from "./Skills/Skills";
import "../../index.css";

export function Main() {
  return (
    <>
      <main>
        <ProfileImage />
        <Description />
        <Skills />
      </main>
    </>
  );
}
