const { Fountain } = require(`fountain.ts`);
const fountain = require(`fountain-js`);

async function onCreateNode({
  node,
  loadNodeContent,
  actions,
  createNodeId,
  createContentDigest,
}) {
  const { createNode, createParentChildLink } = actions;

  // We only care about fountain content.
  if (node.extension !== "fountain") {
    return;
  }

  const content = await loadNodeContent(node);
  const parsedMetadata = fountain.parse(content);
  const parsedContent = new Fountain().parse(content);

  const fountainNode = {
    id: createNodeId(`${node.id} >>> Fountain`),
    children: [],
    // The filesystem node is our "parent" in Gatsby land
    parent: node.id,
    internal: {
      type: `Fountain`,
    },
    frontmatter: {
      title: parsedContent.title,
      date: parsedMetadata.date,
      source: parsedMetadata.source,
    },
    fileAbsolutePath: node.absolutePath,
    html: {
      script: parsedContent.html.script,
      title: parsedContent.html.title_page,
    },
  };

  // Needs to be last for a proper digest of the fountainNode object
  fountainNode.internal.contentDigest = createContentDigest(fountainNode);

  createNode(fountainNode);
  createParentChildLink({ parent: node, child: fountainNode });
}

exports.onCreateNode = onCreateNode;
