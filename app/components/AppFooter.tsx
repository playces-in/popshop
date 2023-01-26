import type { FC } from "react";
import { Footer, Image, Text } from "@mantine/core";

import lovePath from "~/assets/images/love.png";

const AppFooter: FC = () => {
  return (
    <Footer
      height={32}
      px={8}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Center w="100%">
        <Group
          spacing={0}
          sx={({ fontSizes, colors }) => ({
            fontSize: fontSizes.xs,
            fontWeight: 500,
            color: colors.gray[6],
          })}
        >
          <Text>Made with</Text>
          <Image src={lovePath} width={24} height={24} />
          <Text>
            by{" "}
            <Anchor href="https://playces.in" target="_blank" color="indigo">
              Playces
            </Anchor>
          </Text>
        </Group>
      </Center>
    </Footer>
  );
};

export default AppFooter;
