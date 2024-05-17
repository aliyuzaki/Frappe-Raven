import { PageHeader } from "@/components/layout/Heading/PageHeader"
import { ChannelIcon } from "@/utils/layout/channelIcon"
import { ChannelListItem } from "@/utils/channel/ChannelListProvider"
import { EditChannelNameButton } from "../channel-details/rename-channel/EditChannelNameButton"
import { SearchButton } from "./SearchButton"
import { Flex, Heading } from "@radix-ui/themes"
import ChannelHeaderMenu from "./ChannelHeaderMenu"
import { ViewChannelMemberAvatars } from "./ViewChannelMemberAvatars"

interface ChannelHeaderProps {
    channelData: ChannelListItem
}

export const ChannelHeader = ({ channelData }: ChannelHeaderProps) => {

    // The channel header has the channel name, the channel type icon, edit channel name button, and the view or add members button

    return (
        <PageHeader>
            <Flex gap='4' align={'center'} className="group animate-fadein">
                <Flex gap='1' align={'center'}>
                    <ChannelIcon type={channelData.type} size='20' />
                    <Heading size='5' className="mb-0.5">{channelData.channel_name}</Heading>
                </Flex>
                <EditChannelNameButton channelID={channelData.name} channel_name={channelData.channel_name} channelType={channelData.type} disabled={channelData.is_archived == 1} />
            </Flex>
            <Flex gap='4' align='center' className="animate-fadein">
                <ViewChannelMemberAvatars channelData={channelData} />
                <ChannelHeaderMenu />
                {/* <ViewFilesButton /> */}
                <SearchButton />

            </Flex>
        </PageHeader>
    )
}