// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Frontegg.Outputs
{

    [OutputType]
    public sealed class WorkspaceAdminPortalPaletteAdminPortal
    {
        /// <summary>
        /// Error color.
        /// </summary>
        public readonly ImmutableArray<Outputs.WorkspaceAdminPortalPaletteAdminPortalError> Errors;
        /// <summary>
        /// Info color.
        /// </summary>
        public readonly ImmutableArray<Outputs.WorkspaceAdminPortalPaletteAdminPortalInfo> Infos;
        /// <summary>
        /// Primary color.
        /// </summary>
        public readonly ImmutableArray<Outputs.WorkspaceAdminPortalPaletteAdminPortalPrimary> Primaries;
        /// <summary>
        /// Secondary color.
        /// </summary>
        public readonly ImmutableArray<Outputs.WorkspaceAdminPortalPaletteAdminPortalSecondary> Secondaries;
        /// <summary>
        /// Success color.
        /// </summary>
        public readonly ImmutableArray<Outputs.WorkspaceAdminPortalPaletteAdminPortalSuccess> Successes;
        /// <summary>
        /// Warning color.
        /// </summary>
        public readonly ImmutableArray<Outputs.WorkspaceAdminPortalPaletteAdminPortalWarning> Warnings;

        [OutputConstructor]
        private WorkspaceAdminPortalPaletteAdminPortal(
            ImmutableArray<Outputs.WorkspaceAdminPortalPaletteAdminPortalError> errors,

            ImmutableArray<Outputs.WorkspaceAdminPortalPaletteAdminPortalInfo> infos,

            ImmutableArray<Outputs.WorkspaceAdminPortalPaletteAdminPortalPrimary> primaries,

            ImmutableArray<Outputs.WorkspaceAdminPortalPaletteAdminPortalSecondary> secondaries,

            ImmutableArray<Outputs.WorkspaceAdminPortalPaletteAdminPortalSuccess> successes,

            ImmutableArray<Outputs.WorkspaceAdminPortalPaletteAdminPortalWarning> warnings)
        {
            Errors = errors;
            Infos = infos;
            Primaries = primaries;
            Secondaries = secondaries;
            Successes = successes;
            Warnings = warnings;
        }
    }
}
