import React from "react";
import AvatarGroup from "./AvatarGroup";
const Projects = () => {
  return (
    <div className="max-w-[800px] w-full shadow-xl p-3 rounded-md ">
      <div>
        <h3>Projects</h3>
        <small>30 done this month</small>
      </div>
      <table className="w-full">
        <tr>
          <th className="pb-6">Companies</th>
          <th className="pb-6">Members</th>
          <th className="pb-6">Budget</th>
          <th className="pb-6">Completion</th>
        </tr>
        <tr>
          <td className="pb-5">
            <div className="flex items-center">
              <img
                src="https://demos.creative-tim.com/soft-ui-dashboard/assets/img/small-logos/logo-xd.svg"
                alt=""
                width={35}
              />
              <small>Soft UI XD design</small>
            </div>
          </td>
          <td className="pb-5">
            <AvatarGroup arr={[0, 1, 2, 3]} />
          </td>
          <td className="pb-5">$14,000</td>
          <td className="pb-5">
            <div className="">
              <small>60%</small>
              <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div className="bg-gradient-to-r from-[#2152ff] to-[#21d4fd] h-2.5 rounded-full w-[60%]"></div>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td className="pb-5">
            <div className="flex items-center">
              <img
                src="https://demos.creative-tim.com/soft-ui-dashboard/assets/img/small-logos/logo-atlassian.svg"
                alt=""
                width={35}
              />
              <small>Add Progress Track</small>
            </div>
          </td>
          <td className="pb-5">
            <AvatarGroup arr={[0, 1]} />
          </td>
          <td className="pb-5">$14,000</td>
          <td className="pb-5">
            <div className="">
              <small>10%</small>
              <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div className="bg-gradient-to-r from-[#2152ff] to-[#21d4fd] h-2.5 rounded-full w-[10%]"></div>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td className="pb-5">
            <div className="flex items-center">
              <img
                src="https://demos.creative-tim.com/soft-ui-dashboard/assets/img/small-logos/logo-slack.svg"
                alt=""
                width={35}
              />
              <small>Fix Platform Errors</small>
            </div>
          </td>
          <td className="pb-5">
            <AvatarGroup arr={[0, 1]} />
          </td>
          <td className="pb-5">$14,000</td>
          <td className="pb-5">
            <div className="">
              <small>100%</small>
              <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div className="bg-gradient-to-r from-[#17ad37] to-[#98ec2d] h-2.5 rounded-full w-[100%]"></div>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td className="pb-5">
            <div className="flex items-center">
              <img
                src="https://demos.creative-tim.com/soft-ui-dashboard/assets/img/small-logos/logo-spotify.svg"
                alt=""
                width={35}
              />
              <small>Launch Our Mobile App</small>
            </div>
          </td>
          <td className="pb-5">
            <AvatarGroup arr={[0, 1, 2, 3]} />
          </td>
          <td className="pb-5">$14,000</td>
          <td className="pb-5">
            <div className="">
              <small>100%</small>
              <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div className="bg-gradient-to-r from-[#17ad37] to-[#98ec2d] h-2.5 rounded-full w-[100%]"></div>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td className="pb-5">
            <div className="flex items-center">
              <img
                src="https://demos.creative-tim.com/soft-ui-dashboard/assets/img/small-logos/logo-jira.svg"
                alt=""
                width={35}
              />
              <small>Add The New Pricing Page</small>
            </div>
          </td>
          <td className="pb-5">
            <AvatarGroup arr={[0]} />
          </td>
          <td className="pb-5">$14,000</td>
          <td className="pb-5">
            <div className="">
              <small>25%</small>
              <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div className="bg-gradient-to-r from-[#2152ff] to-[#21d4fd] h-2.5 rounded-full w-[25%]"></div>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td className="pb-5">
            <div className="flex items-center">
              <img
                src="https://demos.creative-tim.com/soft-ui-dashboard/assets/img/small-logos/logo-invision.svg"
                alt=""
                width={35}
              />
              <small>Redesign New Online Shop</small>
            </div>
          </td>
          <td className="pb-5">
            <AvatarGroup arr={[0, 1, 2, 3]} />
          </td>
          <td className="pb-5">$14,000</td>
          <td className="pb-5">
            <div className="">
              <small>40%</small>
              <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div className="bg-gradient-to-r from-[#2152ff] to-[#21d4fd] h-2.5 rounded-full w-[40%]"></div>
              </div>
            </div>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Projects;
