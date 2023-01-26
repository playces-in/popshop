import type { FC } from "react";
import { Header, Image, Text } from "@mantine/core";

import Menu from "./AppMenu";
import logoPath from "~/assets/images/logo.png";

import type { Maybe } from "~/queries";
import type { AppViewerFragment } from "~/queries";

export type AppHeaderProps = {
  readonly viewer: Maybe<AppViewerFragment>;
};

const AppHeader: FC<AppHeaderProps> = ({ viewer }) => (
  <Header
    height={50}
    p={6}
    sx={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    }}
  >
    <Button
      component={Link}
      href="/"
      variant="subtle"
      leftIcon={<Image src={logoPath} width={20} height={20} />}
      compact
      px={6}
      py={2}
      h="unset"
      styles={({ colors }) => ({
        root: {
          "&:hover": {
            backgroundColor: colors.gray[1],
          },
        },
        leftIcon: {
          marginRight: 6,
        },
      })}
    >
      <Box>
        <Text weight={700}>Popshop</Text>
        <Text size={11} weight={400} color="dimmed" mt={-3.5}>
          By Playces
        </Text>
      </Box>
    </Button>
    <Menu {...{ viewer }} />
  </Header>
);

export default AppHeader;
