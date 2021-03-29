import React from "react";
import { Box, Image } from "grommet";

import NodeTOC from "./NodeTOC";
import InternalLink from "./InternalLink";

const InstanceTOC = ({ name, title, icon, nodes }) => {
  return (
    <Box gap="small">
      <Box direction="row" align="center" gap="small">
        <Image src={icon} height="24px" />
        <InternalLink
          primary
          altFont
          size="large"
          href={`/${name}/`}
          label={title}
        />
      </Box>
      <Box gap="xsmall">
        {nodes.map((node, i) => (
          <NodeTOC key={i} {...node} />
        ))}
      </Box>
    </Box>
  );
};

export default InstanceTOC;
