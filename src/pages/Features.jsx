import { CommandLineIcon,BuildingOfficeIcon,PresentationChartLineIcon,BuildingLibraryIcon,GlobeAltIcon,AcademicCapIcon} from '@heroicons/react/24/outline'

const features = [
    {
        name: 'Honing Networking Skills ',
        description:
            'Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.',
        icon: GlobeAltIcon,
    },
    {
        name: 'Get involved in Campus Activities',
        description:
            'Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.',
        icon: PresentationChartLineIcon,
    },
    {
        name: 'Network of like-minded Students',
        description:
            'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.',
        icon: BuildingLibraryIcon,
    },
    {
        name: 'Collaboration with industrial experts',
        description:
            'Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.',
        icon: BuildingOfficeIcon,
    },
    {
        name: 'Innovation and technology',
        description:
            'Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.',
        icon: CommandLineIcon,
    },
    {
        name: 'Motivation and Career Guidance',
        description:
            'Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.',
        icon: AcademicCapIcon,
    }
]

export default function Features() {
    return (
        <div className="bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-dark-jmi-green via-mid-jmi-green to-1st-bg py-24 sm:py-32 m-0 border-0 shadow-none" style={{height:"550px"}}>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        Features of SoarX JMI
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                        {features.map((feature) => (
                            <div key={feature.name} className="relative pl-16">
                                <dt className="text-base font-semibold leading-7 text-white">
                                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-jmi-green">
                                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                    </div>
                                    {feature.name}
                                </dt>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}
