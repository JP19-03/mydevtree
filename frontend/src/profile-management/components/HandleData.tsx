import { SocialNetwork } from "../../application-management/models/social-network";
import { UserHandle } from "../models/User";

type HandleDataProps = {
  data: UserHandle;
};

function HandleData({ data }: HandleDataProps) {
  const links: SocialNetwork[] = JSON.parse(data.links).filter(
    (link: SocialNetwork) => link.enabled
  );

  return (
    <div className="space-y-6 text-white">
      <p className="text-5xl text-center font-black">{data.handle}</p>
      {data.image && <img src={data.image} className="max-w-[250px] mx-auto" />}
      <p className="text-lg text-center font-bold">{data.description}</p>
      <div className="mt-20 flex flex-col gap-6">
        {links.length ? (
          links.map((link) => (
            <a
              key={link.name}
              className="bg-white px-5 py-2 flex items-center gap-5 rounded-lg"
              href={link.url}
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                src={`/social/icon_${link.name}.svg`}
                alt="Icon"
                className="w-12"
              />
              <p className="text-black capitalize font-bold text-lg">
                Visit my: {link.name}
              </p>
            </a>
          ))
        ) : (
          <p className="text-center">No links available</p>
        )}
      </div>
    </div>
  );
}

export default HandleData;