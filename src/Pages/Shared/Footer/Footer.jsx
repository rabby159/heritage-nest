/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import logo from "../../../assets/heritageLogo.png";

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 lg:p-20 bg-[#ECF5FF] text-lg text-slate-600 lg:gap-14">
        <aside>
          <img className="w-16" src={logo} alt="heritage logo" />
          <p>
            Design amazing digital experiences that create more happy in the
            world.
          </p>
        </aside>
        <nav className="text-base">
          <h6 className="footer-title">Product</h6>
          <a className="link link-hover">Overview</a>
          <a className="link link-hover">Features</a>
          <a className="link link-hover">Solutions</a>
          <a className="link link-hover">Tutorials</a>
          <a className="link link-hover">Pricing</a>
          <a className="link link-hover">Releases</a>
        </nav>
        <nav className="text-base">
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Careers</a>
          <a className="link link-hover">Press</a>
          <a className="link link-hover">News</a>
          <a className="link link-hover">Media kit</a>
          <a className="link link-hover">Contact</a>
        </nav>
        <nav className="text-base">
          <h6 className="footer-title">Resources</h6>
          <a className="link link-hover">Blog</a>
          <a className="link link-hover">Newsletter</a>
          <a className="link link-hover">Events</a>
          <a className="link link-hover">Help centre</a>
          <a className="link link-hover">Tutorials</a>
          <a className="link link-hover">Support</a>
        </nav>
        <nav className="text-base">
          <h6 className="footer-title">Social</h6>
          <a className="link link-hover">Twitter</a>
          <a className="link link-hover">LinkedIn</a>
          <a className="link link-hover">Facebook</a>
          <a className="link link-hover">GitHub</a>
          <a className="link link-hover">AngelList</a>
          <a className="link link-hover">Dribble</a>
        </nav>
        <nav className="text-base">
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms</a>
          <a className="link link-hover">Privacy</a>
          <a className="link link-hover">Cookies</a>
          <a className="link link-hover">Licenses</a>
          <a className="link link-hover">Settings</a>
          <a className="link link-hover">Contact</a>
        </nav>
      </footer>

      <footer className="footer p-10 border-t bg-[#ECF5FF] border-base-300 text-lg text-slate-600">
        <aside className="items-center grid-flow-col">
          <p>&copy; 2024 Heritage- Nest . All rights reserved.</p>
        </aside>
        <nav className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M7.55016 21.7507C16.6045 21.7507 21.5583 14.2474 21.5583 7.74259C21.5583 7.53166 21.5536 7.31603 21.5442 7.10509C22.5079 6.40819 23.3395 5.54499 24 4.55603C23.1025 4.95533 22.1496 5.21611 21.1739 5.32947C22.2013 4.71364 22.9705 3.7462 23.3391 2.6065C22.3726 3.17929 21.3156 3.58334 20.2134 3.80134C19.4708 3.01229 18.489 2.48985 17.4197 2.31478C16.3504 2.13972 15.2532 2.32178 14.2977 2.83283C13.3423 3.34387 12.5818 4.15544 12.1338 5.14204C11.6859 6.12865 11.5754 7.23535 11.8195 8.29103C9.86249 8.19282 7.94794 7.68444 6.19998 6.79883C4.45203 5.91323 2.90969 4.67017 1.67297 3.15025C1.0444 4.23398 0.852057 5.51638 1.13503 6.73682C1.418 7.95727 2.15506 9.02418 3.19641 9.72072C2.41463 9.6959 1.64998 9.48541 0.965625 9.10666V9.16759C0.964925 10.3049 1.3581 11.4073 2.07831 12.2875C2.79852 13.1677 3.80132 13.7713 4.91625 13.9957C4.19206 14.1939 3.43198 14.2227 2.69484 14.0801C3.00945 15.0582 3.62157 15.9136 4.44577 16.5271C5.26997 17.1405 6.26512 17.4813 7.29234 17.502C5.54842 18.8718 3.39417 19.6149 1.17656 19.6113C0.783287 19.6107 0.390399 19.5866 0 19.5392C2.25286 20.9845 4.87353 21.7521 7.55016 21.7507Z"
                  fill="#0059B1"
                />
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M22.2234 0H1.77187C0.792187 0 0 0.773438 0 1.72969V22.2656C0 23.2219 0.792187 24 1.77187 24H22.2234C23.2031 24 24 23.2219 24 22.2703V1.72969C24 0.773438 23.2031 0 22.2234 0ZM7.12031 20.4516H3.55781V8.99531H7.12031V20.4516ZM5.33906 7.43438C4.19531 7.43438 3.27188 6.51094 3.27188 5.37187C3.27188 4.23281 4.19531 3.30937 5.33906 3.30937C6.47813 3.30937 7.40156 4.23281 7.40156 5.37187C7.40156 6.50625 6.47813 7.43438 5.33906 7.43438ZM20.4516 20.4516H16.8937V14.8828C16.8937 13.5562 16.8703 11.8453 15.0422 11.8453C13.1906 11.8453 12.9094 13.2937 12.9094 14.7891V20.4516H9.35625V8.99531H12.7687V10.5609H12.8156C13.2891 9.66094 14.4516 8.70938 16.1813 8.70938C19.7859 8.70938 20.4516 11.0813 20.4516 14.1656V20.4516Z"
                  fill="#0059B1"
                />
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <g clip-path="url(#clip0_1866_1979)">
                  <path
                    d="M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.3882 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9701 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z"
                    fill="#0059B1"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1866_1979">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M17.7703 10.0969C18.3187 8.56875 19.8984 4.14844 19.8984 2.73281C19.8984 1.48594 19.1625 0.440625 17.85 0.440625C15.7593 0.440625 13.8843 6.61406 13.2984 8.08594C12.8437 6.75 10.7156 0 8.84058 0C7.38277 0 6.69839 1.07344 6.69839 2.42344C6.69839 4.07812 8.30152 8.36719 8.88277 10.0172C8.58746 9.90938 8.26871 9.81562 7.94527 9.81562C6.84839 9.81562 5.68121 11.1797 5.68121 12.2812C5.68121 12.6984 5.91089 13.2844 6.05621 13.6734C4.32652 14.1422 3.66089 15.2953 3.66089 17.0344C3.65621 20.4187 6.86246 24 11.3718 24C16.9031 24 20.3437 19.8469 20.3437 14.4891C20.3437 12.4688 20.0203 10.6453 17.7703 10.0969ZM16.1109 5.0625C16.2984 4.48594 17.1 2.04844 17.85 2.04844C18.2531 2.04844 18.3609 2.46563 18.3609 2.79844C18.3609 3.69375 16.5515 8.63906 16.1531 9.73594L14.5593 9.45469L16.1109 5.0625ZM8.17027 2.26406C8.17027 1.70625 8.84996 0.121875 10.3406 4.47188L11.9625 9.17344C11.2312 9.1125 10.664 9.03281 10.3031 9.23906C9.79214 7.88906 8.17027 3.62812 8.17027 2.26406ZM8.06246 11.4375C9.43589 11.4375 11.2078 15.8719 11.2078 16.4719C11.2078 16.7109 10.9781 17.0062 10.7109 17.0062C9.73121 17.0062 7.10621 13.4016 7.10621 12.4266C7.11089 12.0656 7.70152 11.4375 8.06246 11.4375ZM16.7015 20.1703C15.3375 21.6703 13.5937 22.4484 11.5593 22.4484C8.77496 22.4484 6.57652 20.9203 5.51714 18.3094C4.71558 16.275 5.69527 15.1078 6.48277 15.1078C7.01714 15.1078 9.02808 17.9344 9.02808 18.5344C9.02808 18.7641 8.66714 18.9234 8.47964 18.9234C7.72496 18.9234 7.42964 18.1969 6.08433 16.5141C4.69214 17.9062 7.04527 20.5875 8.81714 20.5875C10.0406 20.5875 10.8375 19.4531 10.5984 18.6188C10.7718 18.6188 10.9875 18.6328 11.1468 18.5906C11.1984 19.8609 11.5734 21.375 13.1015 21.4828C13.1015 21.4406 13.1953 21.15 13.1953 21.1359C13.1953 20.3203 12.6984 19.6078 12.6984 18.7781C12.6984 17.4516 13.7156 16.1672 14.7468 15.4172C15.1218 15.1359 15.5765 14.9625 16.0171 14.8031C16.4718 14.6297 16.9546 14.4281 17.3015 14.0812C17.25 13.5562 17.0343 13.0922 16.5093 13.0922C15.2109 13.0922 10.8562 13.2797 10.8562 11.2313C10.8562 10.9172 10.8609 10.6172 11.6718 10.6172C13.1859 10.6172 17.0296 10.9922 18.1546 11.9813C19.0031 12.7359 19.2937 17.2875 16.7015 20.1703ZM12.0796 14.2641C12.5343 14.4094 13.0031 14.4516 13.4718 14.5453C13.125 14.7984 12.8156 15.1078 12.5203 15.4406C12.389 15.0422 12.2296 14.6531 12.0796 14.2641Z"
                  fill="#0059B1"
                />
              </svg>
            </a>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
