import { KeyIcon, SettingIcon, UserIcon } from "shared/components/elements/icons";
import AccountSetting from "./account-setting"
import PersonalInformation from "./personal-information"
import ChangePassword from "./change-password"

export const DashBoardItems = [
    {
        content: "personal information",
        eventKey: "personal_information",
        Component: PersonalInformation,
        Icon: UserIcon,
    },
    {
        content: "account setting",
        eventKey: "account_setting",
        Component: AccountSetting,
        Icon: SettingIcon,
    },
    {
        content: "change password",
        eventKey: "change_password",
        Component: ChangePassword,
        Icon: KeyIcon,
    },
]
