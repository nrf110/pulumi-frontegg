// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Frontegg.Inputs
{

    public sealed class WorkspaceAdminPortalPaletteAdminPortalErrorGetArgs : global::Pulumi.ResourceArgs
    {
        /// <summary>
        /// contrast_text color.
        /// </summary>
        [Input("contrastText", required: true)]
        public Input<string> ContrastText { get; set; } = null!;

        /// <summary>
        /// dark color.
        /// </summary>
        [Input("dark", required: true)]
        public Input<string> Dark { get; set; } = null!;

        /// <summary>
        /// light color.
        /// </summary>
        [Input("light", required: true)]
        public Input<string> Light { get; set; } = null!;

        /// <summary>
        /// main color.
        /// </summary>
        [Input("main", required: true)]
        public Input<string> Main { get; set; } = null!;

        public WorkspaceAdminPortalPaletteAdminPortalErrorGetArgs()
        {
        }
        public static new WorkspaceAdminPortalPaletteAdminPortalErrorGetArgs Empty => new WorkspaceAdminPortalPaletteAdminPortalErrorGetArgs();
    }
}
