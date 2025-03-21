// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Frontegg.Inputs
{

    public sealed class WorkspaceAdminPortalPaletteAdminPortalGetArgs : global::Pulumi.ResourceArgs
    {
        [Input("errors")]
        private InputList<Inputs.WorkspaceAdminPortalPaletteAdminPortalErrorGetArgs>? _errors;

        /// <summary>
        /// Error color.
        /// </summary>
        public InputList<Inputs.WorkspaceAdminPortalPaletteAdminPortalErrorGetArgs> Errors
        {
            get => _errors ?? (_errors = new InputList<Inputs.WorkspaceAdminPortalPaletteAdminPortalErrorGetArgs>());
            set => _errors = value;
        }

        [Input("infos")]
        private InputList<Inputs.WorkspaceAdminPortalPaletteAdminPortalInfoGetArgs>? _infos;

        /// <summary>
        /// Info color.
        /// </summary>
        public InputList<Inputs.WorkspaceAdminPortalPaletteAdminPortalInfoGetArgs> Infos
        {
            get => _infos ?? (_infos = new InputList<Inputs.WorkspaceAdminPortalPaletteAdminPortalInfoGetArgs>());
            set => _infos = value;
        }

        [Input("primaries")]
        private InputList<Inputs.WorkspaceAdminPortalPaletteAdminPortalPrimaryGetArgs>? _primaries;

        /// <summary>
        /// Primary color.
        /// </summary>
        public InputList<Inputs.WorkspaceAdminPortalPaletteAdminPortalPrimaryGetArgs> Primaries
        {
            get => _primaries ?? (_primaries = new InputList<Inputs.WorkspaceAdminPortalPaletteAdminPortalPrimaryGetArgs>());
            set => _primaries = value;
        }

        [Input("secondaries")]
        private InputList<Inputs.WorkspaceAdminPortalPaletteAdminPortalSecondaryGetArgs>? _secondaries;

        /// <summary>
        /// Secondary color.
        /// </summary>
        public InputList<Inputs.WorkspaceAdminPortalPaletteAdminPortalSecondaryGetArgs> Secondaries
        {
            get => _secondaries ?? (_secondaries = new InputList<Inputs.WorkspaceAdminPortalPaletteAdminPortalSecondaryGetArgs>());
            set => _secondaries = value;
        }

        [Input("successes")]
        private InputList<Inputs.WorkspaceAdminPortalPaletteAdminPortalSuccessGetArgs>? _successes;

        /// <summary>
        /// Success color.
        /// </summary>
        public InputList<Inputs.WorkspaceAdminPortalPaletteAdminPortalSuccessGetArgs> Successes
        {
            get => _successes ?? (_successes = new InputList<Inputs.WorkspaceAdminPortalPaletteAdminPortalSuccessGetArgs>());
            set => _successes = value;
        }

        [Input("warnings")]
        private InputList<Inputs.WorkspaceAdminPortalPaletteAdminPortalWarningGetArgs>? _warnings;

        /// <summary>
        /// Warning color.
        /// </summary>
        public InputList<Inputs.WorkspaceAdminPortalPaletteAdminPortalWarningGetArgs> Warnings
        {
            get => _warnings ?? (_warnings = new InputList<Inputs.WorkspaceAdminPortalPaletteAdminPortalWarningGetArgs>());
            set => _warnings = value;
        }

        public WorkspaceAdminPortalPaletteAdminPortalGetArgs()
        {
        }
        public static new WorkspaceAdminPortalPaletteAdminPortalGetArgs Empty => new WorkspaceAdminPortalPaletteAdminPortalGetArgs();
    }
}
