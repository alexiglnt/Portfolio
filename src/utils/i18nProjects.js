import { TFunction } from 'i18next';

export function localizeProject(t, project) {
    const baseKey = `${project.id}`;
    const td = (path, fallback = undefined) =>
        t(`${baseKey}.${path}`, {
            ns: 'projects',           // ✅ force le namespace
            returnObjects: true,
            defaultValue: fallback,
        });

    return {
        ...project,
        name: td('name', project.name),
        but: td('but', project.but),
        description: td('description', project.description),
        technologies: td('technologies', project.technologies),
        project_type: td('project_type', project.project_type),
        project_details: {
            ...project.project_details,
            description: td('project_details.description', project.project_details?.description || []),
        },
    };
}

