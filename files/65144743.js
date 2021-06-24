const defaults = (project: string) => {
  return {
    name: basename(cwd()),
    project,
    path: ".",
    ignore: defaultIgnores(project).ignore,
  };
};

export let config: any = {
  version,
};

export const initializeConfig = (project: string, ...args: boolean[]) => {
  prompt([
    {
      type: "input",
      name: "name",
      message: "What is the name of the project?",
      default: defaults(project).name,
      when: () => args.every((arg) => arg === false),
    },
    {
      type: "list",
      name: "project",
      message: "What is the type of the project?",
      choices: ["Node", "Python"],
      default: defaults(project).project,
      when: () => args.every((arg) => arg === false),
    },
  ])
    .then((answers: Answers) => {
      const { name, project: projectName } = defaults(project);

      config = setConfig({ name: answers.name || name });
      config = setConfig({ project: answers.project || projectName });
    })
    .then(() =>
      prompt([
        {
          type: "input",
          name: "path",
          message: "Where is your project root located?",
          default: defaults(project).path,
          when: () => args.every((arg) => arg === false),
        },
        {
          type: "input",
          name: "ignore",
          message: "What do you want to ignore? (comma separated)",
          default: defaults(project).ignore,
          when: () => args.every((arg) => arg === false),
        },
      ]).then((answers: Answers) => {
        const { ignore, path } = defaults(project);

        config = setConfig(
          ignoreFiles(config.project, (answers.ignore || ignore)!)
        );
        createConfig(answers.path || path, config);
      })
    );
};
