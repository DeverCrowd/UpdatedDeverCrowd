import React from "react";
  const contacts = [
    {
      id: 1,
      icon: <i className="ri-mail-line"></i>,
      title: "Email",
      subTitle: "devercrowd@gmail.com",
    },
    {
      id: 2,
      icon: <i className="ri-phone-line"></i>,
      title: "Phone",
      subTitle: "+201124251120",
    },
    {
      id: 3,
      icon: <i className="ri-map-pin-line"></i>,
      title: "Location",
      subTitle: "Egypt",
    },
  ];
const Info = () => {
  return (
    <div className="contact-info w-full sm:w-[90%] md:w-[80%] lg:w-[60%] xl:w-[40%] mx-auto backdrop-blur-sm">
      <div className="card w-full h-full bg-cardColor py-6 px-6 sm:px-8 md:px-10 lg:px-12 rounded-2xl border border-primary ">
        <h1 className="text-xl sm:text-2xl pb-3 text-primary">
          Contact Info
        </h1>
        <p className="text-white/60 text-sm sm:text-base">
          We welcome your questions, proposals, or greetings and appreciate your
          interest.
        </p>

        <div className="contact-details pt-10 sm:pt-12 space-y-4">
          {contacts.map((contact) => (
            <div
              key={contact.id}
              className="flex items-start sm:items-center gap-4 sm:gap-6 cursor-pointer  p-4 sm:p-6 rounded-2xl group transition-all duration-300 hover:shadow-lg hover:backdrop-blur-sm hover:-translate-y-2 hover:-translate-x-2"
            >
              <div className="card-icon group-hover:text-primary text-xl sm:text-2xl text-primary">
                {contact.icon}
              </div>
              <div className="card-content">
                <h1 className="text-white text-sm sm:text-base font-semibold">
                  {contact.title}
                </h1>
                <p className="text-white/70 text-xs sm:text-sm">
                  {contact.subTitle}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="connect pt-6 sm:pt-8">
          <p className="text-headColor pb-4 sm:pb-6 text-sm sm:text-base">
            Connect with us:
          </p>
          <div className="links flex items-center gap-4">
            <a href="$" className="link group">
              <i className="ri-github-line text-xl sm:text-2xl transition-all group-hover:scale-110 hover:text-headColor"></i>
            </a>
            <a href="$" className="link group">
              <i className="ri-linkedin-line text-xl sm:text-2xl transition-all group-hover:scale-110 hover:text-headColor"></i>
            </a>
            <a href="$" className="link group">
              <i className="ri-instagram-line text-xl sm:text-2xl transition-all group-hover:scale-110 hover:text-headColor"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
