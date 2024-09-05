import { Title, Text, Anchor, Tree, useTree } from "@mantine/core";
import classes from "./Welcome.module.css";
import { Link } from "@remix-run/react";

export function Welcome() {  
  const tree = useTree();
  return (
    <>
      <Title className={classes.title} ta="center" mt={100}>
        Welcome to{" "}
        <Text
          inherit
          variant="gradient"
          component="span"
          gradient={{ from: "pink", to: "yellow" }}
        >
          Mantine
        </Text>
      </Title>
      <Text color="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
        This starter Remix project includes a minimal setup for server side
        rendering, if you want to learn more on Mantine + Remix integration
        follow{" "}
        <Anchor href="https://mantine.dev/guides/remix/" size="lg">
          this guide
        </Anchor>
        . To get started edit index.tsx file.
      </Text>

      <Tree data={[]} tree={tree} />
      <Link to="/test">Test</Link>
    </>
  );
}
